class User < ApplicationRecord
    validates :password, length: {minimum: 6, allow_nil: true}
    validates :username, :email, presence: true, uniqueness: true
    validates :password_digest, presence: true
    # validates :session_token, presence: true, uniqueness: true
    # validates :date_of_birth, :country_or_region, :profile_name, allow_nil: true
    
    attr_reader :password

    after_initialize :ensure_session_token

    def password=(password)
        self.password_digest = BCrypt::Password.create(password)
        @password=password
    end

    def is_password?(password)
        BCrypt::Password.new(self.password_digest).is_password?(password)
    end

    def self.find_by_credentials(username, password)
        user = find_by_username(username)
        return nil if user.nil?
        user.is_password?(password) ? user : nil
    end

    def ensure_session_token
        self.session_token ||= SecureRandom.urlsafe_base64
    end

    def reset_session_token!
        self.update!(session_token: SecureRandom.urlsafe_base64) && self.session_token
    end

    has_many :playlists,
        foreign_key: :playlist_id,
        class_name: :Playlist

end
