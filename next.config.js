/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "**",
			},
			// {
			// 	protocol: "https",
			// 	hostname: "fal-cdn.batuhan-941.workers.dev",
			// 	pathname: "/files/**",
			// },
		],
	},
};

module.exports = nextConfig;
