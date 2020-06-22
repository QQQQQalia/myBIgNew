/*
 * @Author: QLJ
 * @Date: 2020-06-18 16:18:30
 * @LastEditors: QLJ
 * @LastEditTime: 2020-06-22 09:30:20
 * @FilePath: \BigNews\admin\js\login.js
 */
$(function () {
  $('.loginBtn').on('click', function () {
    let username = $('.input_txt').val().trim()
    let password = $('.input_pass').val().trim()
    if (username == '' || password == '') {
      $('#myModal').modal('show');
      $('.modaltext').text('输入密码或用户名不能为空');
    }
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
          $('#myModal').modal('show')
          $('.modaltext').text(response.msg);
          // hidden.bs.modal监听成功登录后的确认事件
          // 在模态框关闭后 进行token存储 并跳转到首页
          $('#myModal').on('hidden.bs.modal', function (e) {
            // 跳转之前进行token存储
            localStorage.setItem('BigNewToken', response.token)
            location.href = './index.html'
          })
        } else {
          $('#myModal').modal('show')
          $('.modaltext').text(response.msg);
        }
      }
    });
  });

  $('.btnconfirm').click(function (e) {
    e.preventDefault();
    $('#myModal').modal('hide')
  });
})