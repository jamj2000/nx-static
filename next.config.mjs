/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                hostname: 'www.juntadeandalucia.es'
            }
        ]
    }
};

export default nextConfig;
