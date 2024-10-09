import { ExtensionContext } from "@lichtblick/suite";

import { initGroundTruthHierarchyPanel } from "./components/GroundTruthHierarchyPanel";

export function activate(extensionContext: ExtensionContext): void {
  extensionContext.registerPanel({
    name: "GroundTruthHierarchy",
    initPanel: initGroundTruthHierarchyPanel,
  });
}
