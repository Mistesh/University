function welcome(name)
{
    name = document.getElementById('in1').value;
    document.getElementById('p1').innerHTML =  `Welcome, ${name}`;
}

function summ()
{
  let a = document.getElementById('in2').value;
  let b = document.getElementById('in3').value;
  let summ = a+b;

  if ((!isNaN(Number(a)) && (!isNaN(Number(b)))))
  {
    summ=Number(a)+Number(b);
  }

	document.getElementById('p2').innerHTML =  summ;
}

let a = [0, 1, 2, 3, 49, '@', "Кирилл", 81, 3047];

function massiv()
{

	 let q=a.map(
		(a) => {
					if (typeof(a)!="number")
						return 0;
					return a**2;
				}
		)

    document.getElementById('p3').innerHTML =  q;

}
