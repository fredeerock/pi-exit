import type { ExtensionAPI } from "@earendil-works/pi-coding-agent";

export default function exitCommand(pi: ExtensionAPI) {
	pi.registerCommand("exit", {
		description: "Exit Pi (same as /quit)",
		handler: async (_args, ctx) => {
			ctx.shutdown();
		},
	});
}
