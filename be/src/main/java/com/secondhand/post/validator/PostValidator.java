package com.secondhand.post.validator;

import com.secondhand.exception.post.PostOwnershipMismatchException;
import com.secondhand.post.entity.PostMeta;
import com.secondhand.user.login.dto.LoggedInUser;

public class PostValidator {


    public static void validatePostOwnershipMismatch(LoggedInUser loggedInUser, PostMeta postMeta) {
        if (postMeta.getSellerId() != loggedInUser.getId()) {
            throw new PostOwnershipMismatchException();
        }
    }
}
