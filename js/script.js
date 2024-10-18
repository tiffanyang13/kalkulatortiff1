// Fungsi hitung BMI
function hitung(){
		// Definisikan variabel
		var jk = document.getElementById("jk").value;
		var berat = document.getElementById("berat").value;
		var usia = document.getElementById("usia").value;
		var tinggi = document.getElementById("tinggi").value;

		var bmi;
		// var tinggi_pangkat = Math.pow((tinggi/100),2);
		var tinggi_pangkat = (tinggi / 100) * (tinggi / 100);

		// rumus BMI
		bmi = berat/tinggi_pangkat;

		// input validation
		if (berat != null && berat != '' && usia != null && usia != '' && tinggi != null && tinggi != '') {

		document.getElementById("beranda").style.display = 'none';
		document.getElementById("hasil").style.display = 'inline';


		// ATURAN
		var ket1;
		var ket2;
		var ket3;
		var ket4;
		var ket5;
		var ket6;
		var ket7;
		var ket8;
		if (bmi < 18.5) {
			ket1 = 'Kekurangan Berat Badan';
			ket2 = bmi;
			ket3 = 'Anda memiliki berat badan dibawah normal';
			ket4 = 'Hasil BMI Kurang dari 18.5';
			ket5 = 'Anda berada dalam kategori underweight atau berat badan kurang.';
			ket6 = 'menambah';
			ket7 = 'Kurang Berat Badan';
			ket8 = 'Pengeroposan tulang atau osteoporosis<br><br>';
		}else if(bmi <= 24.9){
			ket1 = 'Normal (Ideal)';
			ket2 = bmi;
			ket3 = 'Anda memiliki berat badan normal/ ideal';
			ket4 = 'Hasil BMI diantara 18.5 dan 24.9';
			ket5 = 'Anda berada dalam kategori normal atau berat badan ideal.';
			ket6 = 'menjaga';
			ket7 = 'Berat Badan Ideal';
			ket8 = '-<br><br>';
		}else if(bmi <= 29.9){
			ket1 = 'Kelebihan Berat Badan';
			ket2 = bmi;
			ket3 = 'Anda memiliki berat badan berlebih';
			ket4 = 'Hasil BMI diantara 25.0 dan 29.9';
			ket5 = 'Anda berada dalam kategori overweight atau berat badan berlebih.';
			ket6 = 'menurunkan';
			ket7 = 'Kegemukan';
			ket8 = 'Diabetes<br>Hipertensi<br>Sakit Jantung<br>Osteoarthritis<br><br>';
		}else {
			ket1 = 'Kegemukan (Obesitas)';
			ket2 = bmi;
			ket3 = 'Anda memiliki berat badan berlebih/ obesitas';
			ket4 = 'Hasil BMI 30.0 atau lebih';
			ket5 = 'Anda berada dalam kategori overweight atau berat badan berlebih (Obesitas).';
			ket6 = 'menurunkan';
			ket7 = 'Kegemukan';
			ket8 = 'Diabetes<br>Hipertensi<br>Sakit Jantung<br>Osteoarthritis<br><br>';
		}

		document.getElementById("ket1").innerHTML = ket1;
		document.getElementById("ket2").innerHTML = ket2.toFixed(1);
		document.getElementById("ket3").innerHTML = ket3;
		document.getElementById("ket4").innerHTML = ket4;
		document.getElementById("ket5").innerHTML = ket5;
		document.getElementById("ket6").innerHTML = ket6;
		document.getElementById("ket7").innerHTML = ket7;
		document.getElementById("ket8").innerHTML = ket8;
	}else{
		alert("Inputan Anda tidak lengkap");
	}
}

// Fungsi Reset input form
function reset(){
		document.getElementById("jk").checked = 'true';
		document.getElementById("berat").value = '';
		document.getElementById("usia").value = '';
		document.getElementById("tinggi").value = '';

}