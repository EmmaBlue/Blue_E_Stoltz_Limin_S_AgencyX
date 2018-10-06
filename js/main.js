(() => {
    // variable stack first 
    const workWrapper = document.querySelector('#workWrapper'),
    workImage = document.querySelectorAll('.trigger'),
    workP = document.querySelectorAll('.paraImage');

    // take first element of courseInfo node list 
    function setWorkInfo(data) {
        console.log(workImage);
        workImage[0].src = data.workSource1;
        workImage[1].src = data.workSource2;
        workImage[2].src = data.workSource3;
        workImage[3].src = data.workSource4;
        workImage[4].src = data.workSource5;
        workImage[5].src = data.workSource6;
        workImage[6].src = data.workSource7;
        workImage[7].src = data.workSource8;

        workP[0].innerHTML = data.workPara1;
        workP[1].innerHTML = data.workPara2;
        workP[2].innerHTML = data.workPara3;
        workP[3].innerHTML = data.workPara4;
        workP[4].innerHTML = data.workPara5;
        workP[5].innerHTML = data.workPara6;
        workP[6].innerHTML = data.workPara7;
        workP[7].innerHTML = data.workPara8;

        bioImage = document.querySelectorAll('.bioPic');
        bioImage[0].src = data.employee1;
        bioImage[1].src = data.employee2;

        bioPara = document.querySelectorAll('.aboutText');

        bioPara[0].innerHTML = data.employee1Para;
        bioPara[1].innerHTML = data.employee2Para;


    }


    // call the setWorkInfo function
    setWorkInfo(data);

})();