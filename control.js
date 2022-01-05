function controlKeyboard(player, jump, left, right, windL, windR){
    switch(true){
        case jump.isDown: 
            if(player.body.wasTouching.down || player.body.onFloor()) {
                player.setVelocityY(-150);
                if(windR){
                    player.setVelocityX(220);
                }
                else if(windR){
                    player.setVelocityX(-220);
                }
            }
            //wall jump left 
            else if(player.body.blocked.left){
                player.setVelocity(100,-150);
            }
            //wall jump right
            else if(player.body.blocked.right){
                player.setVelocity(-100,-150);
            }
            break;
        case left.isDown:
            player.setVelocityX(-100);
            player.anims.play('left', true);
            break;
        case right.isDown:
            player.setVelocityX(100);
            player.anims.play('right', true);
            break;
        case windL:
            player.setVelocityX(-220);
            player.anims.play('turn');
            break;
        case windR:
            player.setVelocityX(220);
            player.anims.play('turn');
            break;
        default: 
        player.setVelocityX(0);
        player.anims.play('turn');
    }
}
export {controlKeyboard}