module.exports = {
	apps: [
		{
			name: "DACO",
			script: "npm",
			args: "start",
			exec_mode: "cluster",
			instances: "3"
			// cwd: ' /home/your-name/my-nextjs-project',
			// env: {
			//   NEXT_PUBLIC_...: 'NEXT_PUBLIC_...',
			// },
		}
		// optionally a second project
	]
};