package com.smartiot.auth_service.controller;

import org.springframework.web.bind.annotation.*;
import com.smartiot.auth_service.repository.UserRepository;
import com.smartiot.auth_service.security.JwtUtil;
import com.smartiot.auth_service.model.User;

@RestController
@RequestMapping("/auth")
public class AuthController {

    private final UserRepository repo;

    public AuthController(UserRepository repo) {
        this.repo = repo;
    }

    @PostMapping("/register")
    public String register(@RequestBody User user) {
        repo.save(user);
        return "Usuário criado com sucesso!";
    }

    @PostMapping("/login")
    public String login(@RequestBody User user) {

        var found = repo.findByUsername(user.getUsername());

        if (found.isPresent() &&
            found.get().getPassword().equals(user.getPassword())) {

            return JwtUtil.generateToken(user.getUsername());
        }

        return "Login inválido!";
    }
}