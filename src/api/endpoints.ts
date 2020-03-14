export const Endpoints =  {
    auth: {
        login: () => 'GET /api/auth/login',

        protected: () => `GET /api/auth/protected`,
        fetchLatestProfile: () => `GET /api/auth/fetchLatestProfile`,

        discord: () => `GET /api/auth/discord`,
        discordCallBack: () => `GET /api/auth/discord/cb`,
    }
};
