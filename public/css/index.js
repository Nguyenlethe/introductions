

const app = {
    
    indexImg: 0,
    currentIndex : 0,  
    isPlaying: false,
    isRepeat: false,
    isRandom: false,
    isLogin: false,
    

    // Danh sách bài hát 
    songs: [
        {
        name: "Rồi Nâng Cái Ly - Nal",
        singer: "Cover Út Nhị Mino",
        path: "public/audio/roinangcaily.mp3",
        image:"public/images/roinangcaily1.jpg"  
        },
        {
        name: "Yêu là Cưới",   
        singer: "Phát Hồ, X2X", 
        path: "public/audio/Yeulacuoi.mp3",
        image:"public/images/yeulacuoi.jpg"  
        },
        {
        name: "Tương Tư Nàng Ca Sĩ",
        singer: "TamKe",
        path: "public/audio/Tuowngtunangcasi.mp3",
        image:"public/images/tuongtunangcs.jpg"
        },
        {
        name: "Đâu Còn Đây",
        singer: "Lee Ken, Nal",
        path: "public/audio/dauconday.mp3",
        image:"public/images/dauconday1.jpg"
        },
        {
        name: "Cưới Luôn Được Không",
        singer: "Cover Út Nhị Mino",
        path: "public/audio/Cuoiluondck.mp3",
        image:"public/images/cuoiluondck.jpg"  
        },
        {
        name: "Khuê Mộc Lang",
        singer: "Hương Ly, jombie",
        path: "public/audio/Khuemoclang.mp3",
        image:"public/images/khuemoclang.jpg"
        },
        {
        name: "Anh Thề Đấy",
        singer: "Thanh Hưng",
        path: "public/audio/anhtheday.mp3",
        image:"public/images/anhtheday.jpg"
        },
        {
        name: "Em Băng Qua",
        singer: "Lập Nguyên",
        path: "public/audio/Embawngqua.mp3",
        image:"public/images/embangqua.jpg"
        },
        {
        name: "Đường Tôi Chở Em Về",  
        singer: "Bùi Trường Linh", 
        path: "public/audio/Duongtoichoemve.mp3",
        image:"public/images/duongtoichoemve.jpg"  
        },
        {
        name: "Bạc Phận",
        singer: "Jack, K-ICM",
        path: "public/audio/Bacphan.mp3",
        image:"public/images/bacphan.jpg"
        },
        {
        name: "Bỏ Lỡ Một Người",
        singer: "Lê Bảo Bình",
        path: "public/audio/bolo1nguoi.mp3",
        image:"public/images/bolomotnguoi.jpg"
        },
        {
        name: "Một Bước Yêu Vạn Dặm Đau",
        singer: "Mr.Siro",
        path: "public/audio/motbuocyeuvandamdau.mp3",
        image:"public/images/motbuocyeuvandamdau.jpg"
        },
        {
        name: "Em Là Con Thuyền Cô Đơn",
        singer: "Thái Học",
        path: "public/audio/a.mp3",
        image:"public/images/emlaconthuyencodon.jpg"
        },
        {
        name: "Mashup Mình Ở Bên Nhau",
        singer: "Hương Ly Cover",
        path: "public/audio/mashupminhobennhau.mp3",
        image:"public/images/Mashup.jpg"
        }
    ],

    // Danh sách ngang
    phottos: [
        {
            src: "public/Myphoto/m2.jpg"
        },
        {
            src: "public/Myphoto/m3.jpg"
        },
        {
            src: "public/Myphoto/m4.jpg"
        },
        {
            src: "public/Myphoto/m6.jpg"
        }
    ],


    // Ng lính
    soldier: [
        {
            src: "public/Myphoto/soldier/s8.jpg"
        },
        {
            src: "public/Myphoto/soldier/s3.jpg"
        },
        {
            src: "public/Myphoto/soldier/s2.jpg"
        },
        {
            src: "public/Myphoto/soldier/s1.jpg"
        },
        {
            src: "public/Myphoto/soldier/s6.jpg"
        },
        {
            src: "public/Myphoto/soldier/s12.jpg"
        },
        {
            src: "public/Myphoto/soldier/s4.jpg"
        },
        {
            src: "public/Myphoto/soldier/s5.jpg"
        },
        {
            src: "public/Myphoto/soldier/s7.jpg"
        },
        {
            src: "public/Myphoto/soldier/s9.jpg"
        },
        {
            src: "public/Myphoto/soldier/s10.jpg"
        },
        {
            src: "public/Myphoto/soldier/s11.jpg"
        },   
        {
            src: "public/Myphoto/soldier/s13.jpg"
        },
        {
            src: "public/Myphoto/soldier/s14.jpg"
        },
        {
            src: "public/Myphoto/soldier/s15.jpg"
        },
        {
            src: "public/Myphoto/soldier/s16.jpg"
        },
    ],


    // Khóa học
    courses: [
        {
            name: "Html Css",
            color: '#337ab7' ,
            progress: 80,
        },
        {
            name: "Responsive Design",
            color: 'red',
            progress: 89,
        },
        {
            name: "Javascript",
            color:'violet' ,
            progress: 70,
        },
        {
            name: "C#",
            color: 'salmon',
            progress: 70,
        },
        {
            name: "PhP",
            color: 'salmon',
            progress: 20,
        },
        {
            name: "My Sql",
            color: 'darkcyan',
            progress: 40,
        },
        {
            name: "React Js",
            color: 'tomato',
            progress: 20,
        },
        {
            name: "Photoshop cs6",
            color: 'cornflowerblue',
            progress: 10,
        },
        {
            name: "English",
            color: 'blue',
            progress: 14,
        }
    ],


    
    expected: [
        {
            name: "Node JS",
            color: '#337ab7' ,
            progress: 0,
        },
        {
            name: " Python",
            color: 'red',
            progress: 0,
        },
        {
            name: "Ruby",
            color:'violet' ,
            progress: 0,
        },
        {
            name: "Git & GitHub",
            color: 'salmon',
            progress: 0,
        },
        {
            name: "C++",
            color: 'darkcyan',
            progress: 0,
        },
        {
            name: "Angular",
            color: 'darkcyan',
            progress: 0,
        },
         {
            name: "Laravel",
            color: 'rgb(0, 255, 51)',
            progress: 0,
        },
    ],



    
    // Xl event contact
    handleEventsContact: function (e) {
        const $ = document.querySelector.bind(document)
        const $$ = document.querySelectorAll.bind(document)
        const navBar = $$('.home_content')
        const contents = $$('.conten_show')
        const formSubmit = $('.form_contact')
        const input = $$('.input_form-contact')
        const bodderInput = $$('.border_input')
        const listHome = $('.nav_bar')
        const modalHome = $('.modolhome')
       

        var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        const errorInput = $$('.error-input')
    
    
        // Xl click chuyển Nd
        navBar.forEach((item, index) =>{
            const content = contents[index]
            item.onclick = (e) => {
                document.querySelector('.home_content.active').classList.remove('active')
                e.target.classList.add('active')
                document.querySelector('.conten_show.active').classList.remove('active')
                content.classList.add('active')

                // listHome.style.display = 'none'
                // modalHome.style.display = 'none'
            }
        })
        
        // Xl submit form
        formSubmit.onsubmit = function(e) { 
            e.preventDefault();
            input.forEach((item, index)=>{
                const error = errorInput[index]
                item.onclick = function(){
                    error.textContent = ''
                }
                if(item.value.trim() === ''){
                    error.textContent = 'Không được để trống trường này !';
                }else {
                    if(item.name === 'email'){
                        if(!regex.test(item.value)){
                            error.textContent = 'Vui lòng nhập email của bạn !';
                        }else{
                            error.textContent = ''
                            app.isLogin = true
                        }
                    }
                    if(!item.name === 'email'){
                        error.textContent = ''
                    }
                }
                if(error.textContent == ''){
                    if(app.isLogin){
                        formSubmit.submit()
                    }
                }
            })
        }


        // Xl border input chạy 
        input.forEach((inputBorder,index)=>{
    
            // console.log([inputBorder])
    
            const bdInput =  bodderInput[index]
            inputBorder.oninput = function(e){
                bdInput.style.width = '100%'; 
                bdInput.style.left = '0%'
            }
            inputBorder.onblur = function(e){
                bdInput.style.width = '0%'; 
                bdInput.style.left = '50%'
            }
            })
    },


    // Xl event music
    handleEventsMusic: function(e){

        const $ = document.querySelector.bind(document)
        const $$ = document.querySelectorAll.bind(document)
        const listImg = $('.navmusic_show-img')
        const listShowMusic = $('.navmusic_show-content')
        const playIcon = $('.btn-toggle-play')
        const icontPlay = $('.icon_play')
        const icontPaus = $('.icon_paus')
        const controll = $('.control')

        const musicHeading = $('.cd_thumd-heading')
        const musicName = $('.cd_thumd-sub')
        const imgMusisc = $('.music_show-img')
        const audio = $('#audio')
        const cdThumd = $('.music_show-img')

        const valueTimeAudio = $('#progress')
        const volume = $('.fix_width')
        const magicVolume = $('.loudspeaker')
        const iconVolume = $('.loudspeaker-icon')
        const controllNext = $('.btn-next')
        const controllPrev = $('.btn-prev')

        const borderCd = $('.music_show')
        const repPlayAudio = $('.btn_controll.btn-repeat')
        const setAudioTime = $('.audio_time')
        const randomMusic = $('.btn_controll.btn-random')
        const startTime = $('.start_time')
        const noneFooter = $('.music')

        const fixed = $('.loudspeaker-icon-fixel')
        const close = $('.loudspeaker-icon-mic.close')
        const closePixed = $('.loudspeaker-icon-mic.fixel')
        const fixMargin = $('.dashboard')
        let nameSong = $('.cd_thumd-heading_tapMobile')
        let subSong = $('.cd_thumd-sub_tapMobile')
        let srcSong = $('.music_show-img_tapMobile')

        

        // Click phóng trnag
        fixed.onclick = (() => {
            zoomMusic()
        })


        // click nhỏ lại
        close.onclick = (() => {
           zoomOut()
        })
        closePixed.onclick = (() => {
           zoomOut()
        })



        // Xl phóng to
        function zoomMusic(){
            noneFooter.style.position = 'fixed'
            noneFooter.style.top = '-24px'
            noneFooter.style.left = '0'
            noneFooter.style.right = '0'
            noneFooter.style.bottom = '0'
            fixed.style.display = 'none'
            close.style.display = 'block'
            closePixed.style.display = 'block'
            fixMargin.style.position = 'fixed'


            fixMargin.style.bottom = '0'
            fixMargin.style.right = '0'
            fixMargin.style.left = '0'


        }

        // Xl thu nhỏ
        function zoomOut(){
            noneFooter.style.position = 'relative'
            noneFooter.style.top = ''
            noneFooter.style.left = ''
            noneFooter.style.right = ''
            noneFooter.style.bottom = ''
            close.style.display = 'none'
            closePixed.style.display = 'none'
            fixed.style.display = 'block'
            fixMargin.style.marginTop = '40px'
            fixMargin.style.position = 'initial'
        }

       
        // render list bài hát
        function render(){    
            const htmlsMusic = app.songs.map((item, index)=>{
               return `<div class="song ${index === app.currentIndex ? 'active' : ''}" title="${index}" data-index="${index}"">   
                           <div class="thumb" style="background-image: url('${item.image}')"></div>
                           <div class="body">
                               <h3 class="title">${item.name}</h3>
                               <p class="author">${item.singer}</p>
                           </div>
                           <div class="option">
                               <i class="icon_heart fa-solid fa-heart"></i>
                               <i class="control__icon fas fa-ellipsis-h"></i>
                           </div>
                       </div>`     
           })
           listShowMusic.innerHTML = htmlsMusic.join('')
        }
        render()


        // Lấy ra song lớn nhất
        const musicIndexMax =  Array.prototype.slice.call($$('.song'))
        const getIndexSong =  musicIndexMax.map((songIndex, index) =>{
            return (songIndex.title)
        })
        const max = Math.max(...getIndexSong)
  

        // Đấy thông tin bài hát lên website
        function loadCurrenSong(){       
            musicHeading.textContent = app.songs[app.currentIndex].name;
            musicName.textContent = app.songs[app.currentIndex].singer;
            imgMusisc.style.backgroundImage = `url('${app.songs[app.currentIndex].image}')`;
            audio.src = app.songs[app.currentIndex].path;

            nameSong.textContent =  app.songs[app.currentIndex].name;
            subSong.textContent = app.songs[app.currentIndex].singer;
            srcSong.style.backgroundImage = `url('${app.songs[app.currentIndex].image}')`;

            scrollToActiveSong()  
        }
        loadCurrenSong()


        // click lùi chuyển bài đồng thời chuyển màu & phát nhạc
        function prevColor(){
            const itemMusic = $$('.song')
            const itemMusicActive = $('.song.active')
            app.currentIndex--
            if(app.currentIndex < 0){
                app.currentIndex = app.songs.length - 1
            }
            loadCurrenSong()
            const indexSong = app.currentIndex
            if(itemMusic[indexSong]){
                itemMusicActive.classList.remove('active')
                itemMusic[indexSong].classList.add('active')
                audio.play()
            }
        }


        // click vào song đổi màu render lên cd 
        listShowMusic.onclick = ((e)=>{
            const songNode = e.target.closest('.song:not(.active)')
            const songOption =  e.target.closest('.option')
            if(songNode && !songOption){ 
                if(songNode){
                    const songActive = $('.song.active')
                    songActive.classList.remove('active')
                    app.currentIndex = Number(songNode.dataset.index)
                    songNode.classList.add('active')
                    loadCurrenSong()
                    icontPlay.click()
                }
            }
        })


        // Click Next bài hát
        controllNext.onclick = (()=>{
            nextColor()
        })


        // Click lùi bài hát
        controllPrev.onclick = (()=>{
            prevColor()
        })


        // lấy ra mảng img
        const imgageShow = app.songs.map((song, index)=>{
            return song.image
        })
        

        // return ảnh
        const htmlsImg = imgageShow.map((img, index)=>{
                return `<li class="navmusic_show-img-content" title="${index}" >
                            <img class="navmusic_show-content" title="${index}"  src="${img}" style=" " alt="ảnh bài hát">
                        </li>`     
        })
        listImg.innerHTML = htmlsImg.join('')


        // lấy 4 ảnh ngẫu nhiên in ra
        if(htmlsImg){
            const listContent = $$('.navmusic_show-img-content')
            // Mảng random
            const ramdomImg = [];
                for(let i = 0; i < max; i++){
                    const a = ( Math.floor(Math.random() * max+1))
                    const b = ( Math.floor(Math.random() * max+1))
                    if(a != 0 && b != 0){
                        ramdomImg.push(a)
                        ramdomImg.push(b)
                        }
                    }
            // render ra 1 mảng số ngẫu nhiên != 0
            const removeNoNumber = ramdomImg.map((numberRD)=>{
                if(numberRD != 0){
                    return numberRD
                }
            })
            const newImg =  new Set(removeNoNumber)

            // Mảng 4 số ngẫu nhiên
            const newNumberImg = [...newImg]
            const n = 4
            const setImgArr = newNumberImg.slice(0, n)
            listContent.forEach((item,index)=>{
                if(item.title == setImgArr[0]){
                    item.classList.add('one')
                }else if(item.title == setImgArr[1]){
                    item.classList.add('one')
                }else if(item.title == setImgArr[2]){
                    item.classList.add('one')
                }else if(item.title == setImgArr[3]){
                    item.classList.add('one')
                }else{
                    item.remove()
                }
            })
        }


        // Set thời gian chuyển động cho ảnh
        const listContent = $$('.navmusic_show-img-content')
        function imgIsland() {
            setTimeout(function(){
                listContent[0].classList.remove('one')
                listContent[1].classList.remove('tow')
                listContent[2].classList.remove('three')
                listContent[3].classList.remove('four')
                  
                listContent[0].classList.add('tow')
                listContent[1].classList.add('three')
                listContent[2].classList.add('four')
                listContent[3].classList.add('one')
            },0)

            setTimeout(function(){
                listContent[0].classList.remove('tow')
                listContent[1].classList.remove('three')
                listContent[2].classList.remove('four')
                listContent[3].classList.remove('one')
                     
                listContent[0].classList.add('three')
                listContent[1].classList.add('four')
                listContent[2].classList.add('one')
                listContent[3].classList.add('tow')
            },2000)
            setTimeout(function(){
                listContent[0].classList.remove('three')
                listContent[1].classList.remove('four')
                listContent[2].classList.remove('one')
                listContent[3].classList.remove('tow')
               
                listContent[0].classList.add('four')
                listContent[1].classList.add('one')
                listContent[2].classList.add('tow')
                listContent[3].classList.add('three')
            },4000)

            setTimeout(function(){
                listContent[0].classList.remove('four')
                listContent[1].classList.remove('one')
                listContent[2].classList.remove('tow')
                listContent[3].classList.remove('three')    
               
                listContent[0].classList.add('one')
                listContent[1].classList.add('tow')
                listContent[2].classList.add('three')
                listContent[3].classList.add('four')
            },6000)
        }
        imgIsland()
        setInterval(imgIsland, 8000)


        // Thạ tim 
        let elem = document.querySelectorAll(".icon_heart");
        elem.forEach((items)=>{
            items.onclick = function(e){
                e.target.classList.toggle('active')
            }
        })

        
        // Khi click vao nút 
        playIcon.onclick = ((e)=>{
            if(e.target == icontPlay){
                audio.play();
            }
            if(e.target == icontPaus){
                audio.pause();
            }
        })
        
        
        // Audio play 
        audio.onplay = function(){
            app.isPlaying = true
            controll.classList.remove('active')
            cdThumbAnimate.play(); 
             cdThumbAnimateMobile.play();  
            borderCd.style.border = '1px solid rgba(238, 130, 238, 0.644)'
            noneFooter.style.marginBottom = '-330px'
        }


        // Audio paus
        audio.onpause = function(){
            app.isPlaying = false
            controll.classList.add('active')
            cdThumbAnimate.pause();
            cdThumbAnimateMobile.pause();  
            borderCd.style.border = '0px solid rgba(238, 130, 238, 0)' 
            noneFooter.style.marginBottom = '0px'

        }


        // Ấn vào nút repplay..
        repPlayAudio.onclick = ((e)=>{
            if(app.isRandom == true){
                randomMusic.click()
            }
            app.isRepeat =  !app.isRepeat 
            repPlayAudio.classList.toggle('active')
            
        })


        // Ấn vào nút phát ngẫu nhiên
        randomMusic.onclick = (()=>{
            if(app.isRepeat == true){
                repPlayAudio.click()
            }
            app.isRandom = !app.isRandom
            randomMusic.classList.toggle('active')
        })


        // click next chuyển bài đồng thời chuyển màu & phát nhạc
        function nextColor(){
            if(app.isRandom == true){
                const a = ( Math.floor(Math.random() * max+1))
                app.currentIndex = a
                loadCurrenSong()
                const indexSong = app.currentIndex
                loadColor(indexSong)
            }else{
                app.currentIndex++
                if(app.currentIndex >= app.songs.length){
                    app.currentIndex = 0
                }
                loadCurrenSong()
                const indexSong = app.currentIndex
                loadColor(indexSong)
            }
        }
 

        // Xl click vào song đổi màu
        function loadColor(index){
            const itemMusic = $$('.song')
            const itemMusicActive = $('.song.active')
            itemMusicActive.classList.remove('active')
            itemMusic[index].classList.add('active')
            audio.play()
        } 


        // Xử lý tự nexxt bài hát và hát lại bài vừa hát
        audio.onended = function(){ 
            if(app.isRepeat == true){                
                audio.play()           
            }else   
                if(app.isRandom == true){
                    nextColor()
                }else{
                    nextColor()
                }
        }
            

        // Xử lý kéo tua nhạc 
        valueTimeAudio.oninput = function(){  
            const seekTime = Math.floor(audio.duration / 100 * valueTimeAudio.value)
            audio.currentTime = seekTime; 
        }
        

        // Xl chỉnh âm lượng 
        volume.oninput = (()=>{
            var valueInput  = volume.value / 10
            audio.volume = valueInput

            if(valueInput <= 0){
                iconVolume.classList.remove('fa-volume-high')
                iconVolume.classList.add('fa-volume-xmark')
            }else{
                iconVolume.classList.remove('fa-volume-xmark')
                iconVolume.classList.add('fa-volume-high')
            }
        })



        // Xl audio phát thời gian chạy
        audio.ontimeupdate = (()=> {
            if(audio.duration) {
                var progressPercent = Math.floor(audio.currentTime / audio.duration * 100)
                valueTimeAudio.value = progressPercent; 
                const timeAudio = ((audio.duration - audio.currentTime) / 60).toFixed(2)
                startTime.textContent = (audio.duration / 60).toFixed(2)
                const updataTimeInt = timeAudio.toString().slice(0,1)
                const updataTimeFloat = timeAudio.toString().slice(2,4)
                setAudioTime.textContent = `${updataTimeInt}:${updataTimeFloat}`
            }
        })


        // Đĩa cd quay
        const cdThumbAnimate = cdThumd.animate([   
                {transform: 'rotate(360deg)'} 
            ],{ 
                duration: 8000,               
                iterations: Infinity      
            })
        cdThumbAnimate.pause();  
        const cdThumbAnimateMobile = srcSong.animate([   
                {transform: 'rotate(360deg)'} 
            ],{ 
                duration: 8000,               
                iterations: Infinity      
            })
        cdThumbAnimateMobile.pause();  


        // Xl bài hát đc chọn ở giữa mh
        function scrollToActiveSong(){     
                setTimeout(() => { 
                    if(this.currentIndex < 3) { 
                        const scrollSong =  $('.song.active') 
                        scrollSong.scrollIntoView({ 
                        behavior: 'smooth',  
                        block: 'start',        
                    })
                    } else {
                        const scrollSong =  $('.song.active')
                        scrollSong.scrollIntoView({
                            behavior: 'smooth',
                            block: 'start', 
                        })
                    }
                }, 300)
        }


    },

    // Xl event Img & Course
    handleEventsPhotto: function(e){
        const $ = document.querySelector.bind(document)
        const $$ = document.querySelectorAll.bind(document)
        
        const listImgPhotto = $('.img_countryside')
        const solidiers = $('.img_soldier')
        const modol = $('.modol')
        const iconOut = $('.icon_next.next')
        const iconNext = $('.icon_next.out')
        const iconOutSoldier = $('.icon_next.solidier-next')
        const iconNextSoldier = $('.icon_next.solidier-out')
        const closeImg = $('.close-img')
        const setImgNew = $('.img_full')
        const setImgNewSold = $('.img_full-solidier')

        const showHome = $('.icon_mb')
        const listHome = $('.nav_bar')
        const modalHome = $('.modolhome')
        const closeHome = $('.icon_close-navMb')


        const contentTextBlog = $$('.content_blog')
        const showFullText = $$('.show_all-blog')
        const showSmallBlog = $$('.show_small-blog')
        

        // Ẩn hiện blog
        showFullText.forEach((text,index)=>{
            const content = contentTextBlog[index]
            const small = showSmallBlog[index]
            text.onclick = (()=>{
                content.style.height = 'auto'
                text.style.display = 'none'
                small.style.display = 'block'
            })

            small.onclick = (()=>{
                content.style.height = '200px'
            })
        })


        // Xl tắt menuhome mobile
        showHome.onclick = (()=>{
            listHome.style.transform = 'translateX(-2%)'
            modalHome.style.display = 'block'
        })

        modalHome.onclick = (()=>{
            exitHome()
        })
        closeHome.onclick = (()=>{
            exitHome()
        })

        // Xl tắt menuhome mobile
        function exitHome(){
            listHome.style.transform = 'translateX(-105%)'
            modalHome.style.display = 'none'
        }


        // Course
        const listCourse = $('.content_skill')
        function getCourse() {
            const course = app.courses.map((course) =>{
                return `<p class="percent_sub">${course.name}</p>

                            <div class="percent_course">
                                <div class="show_soft-skill">
                                    <div class="width_show_soft" style="width : 10%; height :100%;  background-color: ${course.color};"></div>
                                </div>
                                <p class="percent_course-number">${course.progress}%</p>
                            </div>`
                
            })
            listCourse.innerHTML = course.join('')
        }
        getCourse()


        // courses 2
        const listCourse2 = $('.content_skill-rout')
        function getCourse2() {
            const course2 = app.expected.map((course) =>{
                return `<p class="percent_sub">${course.name}</p>
                            <div class="percent_course">
                                <div class="show_soft-skill">
                                    <div class="width_show_soft2" style="width : 0%; height :100%;  background-color: ${course.color};"></div>
                                </div>
                                <p class="percent_course-number">${course.progress}%</p>
                            </div>`
                
            })
            listCourse2.innerHTML = course2.join('')
        }
        getCourse2()
      
        // Show img 1
        function renderImg(){
            const htmlImg = app.phottos.map((img, index)=>{
                return `<div class="hug horizontal data-set="${index}">
                            <img class="hug_img-content photo ${index === app.currentIndex ? 'active' : ''}" name="${index}" src="${img.src}" alt="ảnh của nguyện">
                        </div>`
            })
            listImgPhotto.innerHTML = htmlImg.join('')
        } 
        renderImg()


        // Show img 2
        function renderImgSoldier(){
            const htmlImg = app.soldier.map((imgs, index)=>{
                return `<div class="hug soldier  data-set="${index}">
                            <img class="hug_img-content myimg" name="${index}" src="${imgs.src}" alt="ảnh của nguyện">
                        </div>`
            })
            solidiers.innerHTML = htmlImg.join('')
        } 
        renderImgSoldier()



        // Click hiện lên ảnh
        let imgMyShowFull = $$('.hug_img-content.myimg')
        imgMyShowFull.forEach((items)=>{
            items.onclick = function(e){
                iconOut.style.display = 'none'
                iconNext.style.display = 'none'
                iconOutSoldier.style.display = 'block'
                iconNextSoldier.style.display = 'block'
                setImgNew.style.display = 'none'
                setImgNewSold.style.display = 'block'
                app.indexImg = e.target.name 
                loadCurrenImgMy()
                modol.style.display = 'block'
            }
        })


        // Up ảnh lên
        function  loadCurrenImgMy(){       
            setImgNewSold.src = app.soldier[app.indexImg].src;
        }
        loadCurrenImgMy()


        // next ảnh
        iconOutSoldier.onclick = (()=>{
            app.indexImg++
            if(app.indexImg > app.soldier.length-1){
                app.indexImg = 0
                loadCurrenImgMy()
            }
            loadCurrenImgMy()
        })


        // lùi ảnh
        iconNextSoldier.onclick = (()=>{
            app.indexImg--
            if(app.indexImg < 0){
                app.indexImg = app.soldier.length-1
                loadCurrenImgMy()
            }
            loadCurrenImgMy()
        })
           

        // Click hiện lên ảnh
        let imgShowFull = $$('.hug_img-content.photo')
        imgShowFull.forEach((items)=>{
            items.onclick = function(e){
                iconOut.style.display = 'block'
                iconNext.style.display = 'block'
                iconOutSoldier.style.display = 'none'
                iconNextSoldier.style.display = 'none'
                setImgNewSold.style.display = 'none'
                setImgNew.style.display = 'block'
                app.indexImg = e.target.name 
                loadCurrenImg()
                modol.style.display = 'block'
            }
        })
        
       
        // Up ảnh lên
        function loadCurrenImg(){       
            setImgNew.src = app.phottos[app.indexImg].src;
        }
        loadCurrenImg()

       
        // next ảnh
        iconNext.onclick = (()=>{
            app.indexImg++
            if(app.indexImg > app.phottos.length-1){
                app.indexImg = 0
                loadCurrenImg()
            }
            loadCurrenImg()
        })


        // lùi ảnh
        iconOut.onclick = (()=>{
            app.indexImg--
            if(app.indexImg < 0){
                app.indexImg = app.phottos.length-1
                loadCurrenImg()
            }
            loadCurrenImg()
        })


        // Click tắt ảnh 
        closeImg.onclick = (()=>{
            modol.style.display = 'none'
        })

      
        // vuốt lên hiện icon & ngc lại 
        const inputPercent = $$('.width_show_soft')
        const arrr = []
        window.onscroll= function(){
            arrr.push(window.scrollY)
            const after = arrr[arrr.length-2]
            const prior = arrr[arrr.length-1]
            if(after < prior){
                if(after > 50){
                    showHome.style.transform = 'translateX(-111%)'
                }
                
            }else{
                showHome.style.transform = 'translateX(0)'
            }
            inputPercent.forEach((course, index)=>{
                if(window.scrollY > 300){
                    
                    course.style.width = `${app.courses[index].progress}%`
                }else{
                    course.style.width = 0
                }
            })
        }
    },

    start: function(){ 
        this.handleEventsContact(); 
        this.handleEventsMusic();
        this.handleEventsPhotto()
    }
}
app.start();
