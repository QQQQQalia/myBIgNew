/*
 * @Author: QLJ
 * @Date: 2020-06-18 16:18:30
 * @LastEditors: QLJ
 * @LastEditTime: 2020-06-22 11:50:21
 * @FilePath: \BigNews\admin\js\index.js
 */
$(function () {
  // 获取用户信息
  // 请求地址：/admin/user/info
  // 请求方式：get
  $.ajax({
    type: "get",
    url: BigNew.user_info,
    // headers: {
    //   Authorization: localStorage.getItem('BigNewToken')
    // },
    //   beforeSend(xhr) {
    //     xhr.setRequestHeader("Authorization", localStorage.getItem('BigNewToken'));
    // },
    //  data: "data",
    dataType: "json",
    success: function (response) {
      console.log(response);
      if (response.code == 200) {
        $('.user_info').html(template('uesrInfo', response.data))
        $('.top_img').attr('src', response.data.userPic)
      }
    }
  });

  $('.level01').on('click', function () {
    // 当前点击项添加样式 其他项去除样式
    $(this).addClass('active').siblings().removeClass('active')
    // 判断当前项的下一个class是否是level02
    if ($(this).next().hasClass('level02')) {
      // 伸缩子项
      $(this).next().slideToggle();
      // 旋转箭头
      $(this).find('b').toggleClass('rotate0')
    } else {
      // 点击其他项时 level02项收起
      $('.level02').slideUp()
      // 点击其他项时 旋转箭头
      $('.level01').find('b').removeClass('rotate0')
      // 点击其他项时 去除子项样式
      $('.level02>li').removeClass('active')
    }
  });

  // 当前点击子项添加样式 其他子项去除样式
  $('.level02>li').on('click', function () {
    $(this).addClass('active').siblings().removeClass('active')
  });
  // 退出按钮 去除token 返回登录界面
  $('.logout').on('click', function () {
    localStorage.removeItem('BigNewToken')
    location.href = './login.html'
  });
})