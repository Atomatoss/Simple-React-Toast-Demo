const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const isDev = process.env.NODE_ENV === "development";
const config = require("./public/config")[isDev ? "dev" : "build"];

module.exports = {
	mode: isDev ? "development" : "production",
	entry: "./src/index.js",
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: "bundle.[hash:8].js",
		publicPath: isDev ? "/" : "./",
	},
	devServer: {
		host: "127.0.0.1",
		port: 8000,
		quiet: false, //默认不启用
		inline: true, //默认开启 inline 模式，如果设置为false,开启 iframe 模式
		stats: "errors-only", //终端仅打印 error
		overlay: false, //默认不启用
		clientLogLevel: "silent", //日志等级
		compress: true, //是否启用 gzip 压缩
		hot: true,
	},
	devtool: "cheap-module-eval-source-map",
	resolve: {
		extensions: [".js", ".jsx", ".json"],
		alias: {
		"@": path.join(__dirname, "./src"),
		},
	},
	module: {
		rules: [
		{
			test: /\.jsx?$/,
			use: {
			loader: "babel-loader",
			options: {
				presets: ["@babel/preset-react", "@babel/preset-env"],
				plugins: [
				[
					"@babel/plugin-transform-runtime",
					{
					corejs: 3,
					},
				],
				],
			},
			},
			exclude: /node_modules/,
		},
		{
			test: /\.(le|c)ss$/,
			use: [
			"style-loader",
			{
				loader: "css-loader",
				options: {
				modules: true,
				//   localIdentName: "[hash:base64:6]",
				},
			},
			{
				loader: "postcss-loader",
				options: {
				plugins: function () {
					return [
					require("autoprefixer")({
						overrideBrowserslist: [">0.25%", "not dead"],
					}),
					];
				},
				},
			},
			"less-loader",
			],
			exclude: /node_modules/,
		},
		{
			test: /\.(png|jpg|gif|jpeg|webp|svg|eot|ttf|woff|woff2)$/,
			use: [
			{
				loader: "url-loader",
				options: {
				limit: 10240, //10K
				esModule: false,
				name: "[name]_[hash:6].[ext]",
				outpath: "assets",
				},
			},
			],
			exclude: /node_modules/,
		},
		],
	},
	plugins: [
		new CleanWebpackPlugin(),
		new HtmlWebpackPlugin({
		template: "./public/index.html",
		filename: "index.html",
		// config: config.template,
		minify: {
			removeAttributeQuotes: false,
			collapseWhitespace: false,
		},
		}),
	],
};
