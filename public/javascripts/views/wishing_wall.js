window.onload = (function () {
    //对象数组
    var messages = [
        {   "id":1,
            "name":"刘作虎",
            "content":"我们的产品理念是为不将就的人提供高品质、优设计的生活周边产品！",
            "time":"2016-02-17 00:00:00"
        },
        {   "id":2,
            "name":"王自如",
            "content":"真正的科技是让你感受不到科技的存在。",
            "time":"2016-02-18 08:00:00"
        },
        {   "id":3,
            "name":"王尼玛大大",
            "content":"求尼玛老公抱，哈哈哈！",
            "time":"2016-02-19 09:00:00"
        },
        {   "id":4,
            "name":"丁磊",
            "content":"网易云音乐是业界公认的良心音乐播放器之一。",
            "time":"2016-02-20 10:00:00"
        },
        {   "id":5,
            "name":"大内密探零零发",
            "content":"你怎么会知道我每次都躲在桌子下面？\n" +
                    "你每次都躲在桌子下面哪，我有什么办法能够不知道你躲在桌子下面呢？\n" +
                    "可是我不躲在桌子下面，我怕你找不到我嘛！",
            "time":"2016-02-21 11:00:00"
        },
        {   "id":6,
            "name":"陈又又",
            "content":"我们站着，不说话，就十分美好!",
            "time":"2016-02-22 22:00:00"
        },
        {   "id":7,
            "name":"你有几个好妹妹",
            "content":"呀，又发新歌了，欢迎大家收听哈！",
            "time":"2016-02-23 23:00:00"
        },
        {   "id":8,
            "name":"217",
            "content":"沉迷学习，日渐消瘦，哈哈",
            "time":"2017-09-03 23:30:00"
        }
    ];

    var content = document.getElementById("content");

    for(var i = 0;i < messages.length;i++){
        //添加新标签
        var newDiv = document.createElement("div");
        //绑定类名和ID
        newDiv.className = "tip1";
        newDiv.id = "tip" + messages[i].id;
        //改变位置
        var topValue = parseInt(Math.random()*400);
        var leftValue = parseInt(Math.random()*700);
        newDiv.style.top = topValue +"px";
        newDiv.style.left = leftValue +"px";

        newDiv.innerHTML = '<div class="tip_h" title="双击关闭纸条">'+
                                '<div class="num">第[XXX]条 ' + messages[i].time + '</div>'+
                                '<div class="close" title="关闭纸条" >×</div>'+
                                '<div class="clr"></div>'+
                            '</div>'+
                            '<div class="tip_c">'+
                                messages[i].content +
                            '</div>'+
                            '<div class="tip_f">'+
                                '<div class="icon">'+
                                '<img src="../images/bpic_1.png">'+
                            '</div>'+
                            '<div class="name">' + messages[i].name + '</div>'+
                                '<div class="clr"></div>'+
                            '</div>';
        //把新创建的元素放入content里面
        content.appendChild(newDiv);

        //绑定事件，提高层级
        newDiv.onclick = fn;

        //点击关闭按钮的时候关闭父盒子。
        var closeDiv = newDiv.getElementsByClassName("close")[0];
        closeDiv.onclick = function () {
            content.removeChild(this.parentNode.parentNode);
        }

        //双击关闭按钮类名叫做tip_h
        var dbDiv = newDiv.getElementsByClassName("tip_h")[0];
        dbDiv.ondblclick = function () {
            content.removeChild(this.parentNode);
        }
    }
    var index = 1;
    function fn(){
        this.style.zIndex = index;
        index++;
    }
});
