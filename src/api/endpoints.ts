export const Endpoints =  {
    auth: {
        login: () => 'GET /auth/login',

        protected: () => `GET /auth/protected`,
        fetchLatestProfile: () => `GET /auth/fetchLatestProfile`,

        discord: () => `GET /auth/discord`,
        discordCallBack: () => `GET /auth/discord/cb`,
    }
};
