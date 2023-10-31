import { ChangeEvent, useEffect, useState } from 'react';
import { Input, Space, Button, message } from 'antd';
import styles from './login.module.scss';
import initLoginBg from './init';
import 'antd/dist/antd.css';
import './login.less';
import { useNavigate } from 'react-router-dom';

const app = () => {
  let navigateTo = useNavigate();
  useEffect(() => {
    initLoginBg();
    window.onresize = function () {
      initLoginBg();
    };
  }, []);

  const [usernameVal, setUsernameVal] = useState('');
  const [passwordVal, setPasswordVal] = useState('');
  const [captchaVal, setCaptchaVal] = useState('');
  // 定义一个变量保存验证码图片信息
  const [captchaImg, setCaptchaImg] = useState('');
  const usernameChange = (e: ChangeEvent<HTMLInputElement>) => {
    // 获取用户输入的用户名
    // console.log(e.target.value);
    // 修改usernameVal这个变量为用户输入的那个值。 以后拿到usernameVal这个变量就相当于拿到用户输入的信息。
    setUsernameVal(e.target.value);
  };
  const passwordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPasswordVal(e.target.value);
  };
  const captchaChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCaptchaVal(e.target.value);
  };
  // 点击登录按钮的事件函数
  const gotoLogin = async () => {
    console.log(
      '用户输入的用户名，密码，验证码分别是：',
      usernameVal,
      passwordVal,
      captchaVal,
    );
    // 验证是否有空值
    if (!usernameVal.trim() || !passwordVal.trim() || !captchaVal.trim()) {
      message.warning('请完整输入信息！');
      return;
    }
  };
  // 点击验证码图片盒子的事件函数
  const getCaptchaImg = async () => {
    // 做验证码的请求
    // CaptchaAPI().then((res)=>{
    //   console.log(res);
    // })
    // let captchaAPIRes = await CaptchaAPI();
    // console.log(captchaAPIRes);
    // if(captchaAPIRes.code===200){
    //   // 1、把图片数据显示在img上面
    //   setCaptchaImg("data:image/gif;base64,"+captchaAPIRes.img)
    //   // 2、本地保存uuid，给登录的时候用
    //   localStorage.setItem("uuid",captchaAPIRes.uuid)
    // }
  };
  return (
    <div className={styles.loginPage}>
      <canvas id="canvas"></canvas>
      <div className={styles.loginBox}>
        <div className={styles.title}>
          <h1>GavinLeeeee &nbsp; 通用模板</h1>
          <p>hello，world</p>
        </div>
      </div>
    </div>
  );
};

export default app;
