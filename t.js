
function goToParentDirectory(path) {
    console.log(path);
    const parentDirectory = path.replace(/\\/g, '/').split('/').slice(0, -1).join('/');
    // 检查上级目录是否为空
    if (parentDirectory === '') {
      path = '/';
    } else {
      path = parentDirectory;
    }


    return path;
}




console.log(goToParentDirectory(`C:\\1\\`));