var notify = document.querySelector('.notify');
var btn = document.querySelector('.btn');
var clearBtn = document.querySelector('.clear-btn');
btn.addEventListener('click', active);
clearBtn.addEventListener('click', clearNum);

var isclearclasspresent = false;

function active(){
	if(isclearclasspresent){
		var ele = document.getElementsById('notifyid');
		ele.classList.remove('clear-class');
		isclearclasspresent = false;
	}
	var add = Number(notify.getAttribute('data-count'))|| 0;
	notify.setAttribute('data-count', add + 1);
	if (add === 0) {
		notify.classList.add('add-numb');
	}
	false;
}
function clearNum(){
	notify.setAttribute('data-count', 0);
	notify.classList.add('clear-class');
	isclearclasspresent = true;
}





// linear-gradient(#ff4d4d,#ff3333,#ff1a1a);