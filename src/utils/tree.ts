export const treeToList = (tree: any[], list: any[] = []) => {
  if (!tree) {
    return list;
  }

  for (const item of tree) {
    list.push(item)
    list = list.concat(...treeToList(item.children));
  }

  return list;
}