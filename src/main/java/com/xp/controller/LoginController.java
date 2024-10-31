package com.xp.controller;

import com.xp.pojo.Emp;
import com.xp.pojo.Result;
import com.xp.service.EmpService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@Slf4j
@RestController
public class LoginController {

    @Autowired
    private EmpService empService;

    @PostMapping("/login")
    public Result login(@RequestBody Emp emp) {
        log.info("员工登录: {}", emp);
        Emp e = empService.login(emp);
        if (e != null) {
            return Result.success();
        }
        //TODO登录成功,生成令牌,下发令牌
        //登录失败, 返回错误信息
        return Result.error("用户名或密码错误");
    }

}
