bitbot.select_model(BBModel.Auto)
basic.forever(function () {
    if (bitbot.readLine(BBLineSensor.Left) == 1) {
        bitbot.rotate(BBRobotDirection.Left, 30)
    } else if (bitbot.readLine(BBLineSensor.Right) == 1) {
        bitbot.rotate(BBRobotDirection.Right, 30)
    } else if (false) {
        bitbot.go(BBDirection.Forward, 40)
    } else {
    	
    }
})
