import { useState } from 'react';
import { RenderTree } from '../types/message';

export default function useTreeView() {
  const [visible, setVisible] = useState<boolean>(false);

  const isDefaultExpanded = (defaultSelected: string[], node: Pick<RenderTree, 'name'>) =>
    !!defaultSelected.find((x) => x === node.name);

  return { visible, isDefaultExpanded, setVisible };
}
