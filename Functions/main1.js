function tabremove(arr, index) {
  // Only change code below this line

  const tabsBeforeIndex = arr.slice(0, index) // Get the tabs before the tab
  const tabsAfterIndex = arr.slice(index + 1) // Get the tabs after the tab

  arr = tabsBeforeIndex.concat(tabsAfterIndex) // Join them together

  // Only change code above this line

  return arr
}

const arr = ['GMail', 'Inbox', 'Work mail', 'Docs', 'freeCodeCamp'] // [ 'GMail', 'Inbox', 'Work mail' ]

const res = tabremove(arr, 3)

console.log(res)

// [ 'GMail', 'Inbox', 'Work mail', 'freeCodeCamp' ]
