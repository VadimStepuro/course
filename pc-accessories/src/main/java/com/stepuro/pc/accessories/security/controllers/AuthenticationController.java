package com.stepuro.pc.accessories.security.controllers;

import com.stepuro.pc.accessories.security.models.AuthentcationResponse;
import com.stepuro.pc.accessories.security.models.AuthenticationRequest;
import com.stepuro.pc.accessories.security.models.IsAuthorised;
import com.stepuro.pc.accessories.security.models.RegisterRequest;
import com.stepuro.pc.accessories.security.service.AuthenticationService;
import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;


@RestController
@RequestMapping("/api/authentication")
@RequiredArgsConstructor
public class AuthenticationController {

    private final AuthenticationService authenticationService;
    @PostMapping("/register")
    public ResponseEntity<AuthentcationResponse> register(@RequestBody RegisterRequest request){
        return ResponseEntity.ok(authenticationService.register(request));
    }

    @PostMapping("/authorise")
    public ResponseEntity<AuthentcationResponse> authorise(@RequestBody AuthenticationRequest request){
        return ResponseEntity.ok(authenticationService.authenticate(request));
    }

    @GetMapping ("/isAuthorised")
    public IsAuthorised isAuthorised(Principal principal){
        return new IsAuthorised(principal != null);
    }

    @GetMapping("/logout")
    public void logout(HttpServletResponse response){
        Cookie deleteToken = new Cookie("accessToken", null);
        deleteToken.setMaxAge(0);
        response.addCookie(deleteToken);
    }
}
