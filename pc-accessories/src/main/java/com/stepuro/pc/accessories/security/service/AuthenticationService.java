package com.stepuro.pc.accessories.security.service;

import com.stepuro.pc.accessories.service.RoleService;
import com.stepuro.pc.accessories.security.models.AuthentcationResponse;
import com.stepuro.pc.accessories.security.models.AuthenticationRequest;
import com.stepuro.pc.accessories.security.models.RegisterRequest;
import com.stepuro.pc.accessories.models.User;
import com.stepuro.pc.accessories.repositories.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class AuthenticationService {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;

    private final RoleService roleService;

    private final JwtService jwtService;
    private final AuthenticationManager authenticationManager;
    public AuthentcationResponse authenticate(AuthenticationRequest request) {
        authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(
                request.getLogin(),
                request.getPassword()
        ));
        User user = userRepository.findByLogin(request.getLogin()).orElseThrow();
        var jwtToken = jwtService.generateToken(user);
        return AuthentcationResponse
                .builder()
                .token(jwtToken)
                .build();
    }

    public AuthentcationResponse register(RegisterRequest request) {
        User user = User.builder()
                .login(request.getLogin())
                .password(passwordEncoder.encode(request.getPassword()))
                .role(roleService.findById(1))
                .build();
        userRepository.save(user);
        var jwtToken = jwtService.generateToken(user);
        return AuthentcationResponse
                .builder()
                .token(jwtToken)
                .build();
    }
}
