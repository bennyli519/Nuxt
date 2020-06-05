export default function ({ $axios, redirect, store }) {
    // http request 拦截器
    $axios.interceptors.request.use(
        (config) => {
            let signParam = config.isNoSign ? '' : {
                token: 'asdlkfjasdklfjklsdajfklasdjkfl',
                deputyToken: 'adsfasd',
            };
            config.data = {
                timeZone: 8,
                language: 101,
                ...signParam,
                ...config.data
            }

            return config;
        },
        (err) => {
            return Promise.reject(err);
        });

    // http response 拦截器
    $axios.interceptors.response.use(
        (response) => {
            // 直接返回内容
            if (response.success) {
                return response.data;
            }
            return response.data;
        },
        (error) => {
            // store.commit(types.SET_LOAD, false);
            if (error.response) {
                const code = parseInt(error.response && error.response.status);
                switch (code) {
                    case 401:
                        // sessionStorage.clear();
                        redirect('https://passport.likeshuo.com/signin/#/');;
                        console.log(401);
                        break;
                    case 403:
                        // sessionStorage.clear();
                        redirect('https://passport.likeshuo.com/signin/#/');;
                        console.log(403);
                        break;
                    case 404:
                        // sessionStorage.clear();
                        console.log(404);
                        break;
                    case 500:
                        // Message.error(‘Server exception‘);
                        break;
                    case 502:
                        // Message.error(‘Bad Gateway‘);
                        break;
                    case 503:
                        // Message.error(error.message);
                        break;
                    case 504:
                        // Message.error(error.message);
                        break;
                    default:
                        break;
                }
            }
            // console.error(error.config.url, error.response.status)
            return Promise.reject(error);
        });
}