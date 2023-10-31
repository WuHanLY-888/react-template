// import { useState } from 'react'
// import SparkMD5 from 'spark-md5'
import { useRoutes } from 'react-router-dom';
import router from './router';

// function getFile(e:Event) {
//   let file = (e.target as HTMLInputElement).files[0];
//     getMD5(file)
// }
// function getMD5(file) {
//   // 使用sparkMD5的ArrayBuffer类，读取二进制文件
//     const spark = new SparkMD5.ArrayBuffer()
//     const fileReader = new FileReader()
//     // 异步操作，读完后的结果
//     fileReader.onload = (e) => {
//       // 把文件开始传入spark
//         spark.append(e.target.result)
//         // spark计算出MD5后的结果
//         const _md5 = spark.end()
//         console.log(_md5)
//         // 下面可以写一些自己需要的业务代码, 例如 fileItem.fileMD5 = _md5
//     }
//     // fileReader读取二进制文件
//     fileReader.readAsArrayBuffer(file)
// }
function App() {
  // const [count, setCount] = useState(0)
  const Outlet = useRoutes(router);

  return Outlet;
}

export default App;
