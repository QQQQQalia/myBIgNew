/*
 * @Author: QLJ
 * @Date: 2020-06-18 16:18:30
 * @LastEditors: QLJ
 * @LastEditTime: 2020-06-21 17:04:57
 * @FilePath: \BigNews\admin\js\login.js
 */
$(function () {
  $('.loginBtn').on('click', function () {
    let username = $('.input_txt').val()
    let password = $('.input_pass').val()
    // 用户登录
    // 请求地址：/admin/user/login
    // 请求方式：post
    $.ajax({
      type: "post",
      url: window.BigNew.user_login,
      data: {
        username,
        password
      },
      dataType: "json",
      success: function (response) {
        console.log(response);
        if (response.code == 200) {
          location.href = './index.html'
        }
      }
    });


  });
})