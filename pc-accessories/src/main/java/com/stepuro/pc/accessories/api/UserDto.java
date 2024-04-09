package com.stepuro.pc.accessories.api;

import com.stepuro.pc.accessories.models.Role;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class UserDto {
    private long userId;
    private String login;

    private Role role;
}
