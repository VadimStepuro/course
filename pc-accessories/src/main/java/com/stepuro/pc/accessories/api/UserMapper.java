package com.stepuro.pc.accessories.api;

import com.stepuro.pc.accessories.models.User;

public class UserMapper {
    public static UserDto userToDto(User user){
        return UserDto.builder()
                .userId(user.getUser_id())
                .login(user.getLogin())
                .role(user.getRole())
                .build();
    }

    public static User dtoToUser(UserDto dto){
        return User.builder()
                .user_id(dto.getUserId())
                .login(dto.getLogin())
                .role(dto.getRole())
                .build();
    }
}
