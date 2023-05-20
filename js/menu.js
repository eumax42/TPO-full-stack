let menuPrincipal=`
    <div class="topnav" id="myTopnav">
        <a href="index.html">Inicio</a>
        <a href="cabanas.html">Cabañas</a>
        <a href="entorno.html">Entorno</a>
        <a href="contacto.html">Contacto</a>
        <a href="javascript:void(0);" class="icon" onclick="myFunction()">
            <i class="fa fa-bars"></i>
        </a>
    </div>
`
        // <a href="index.html" class="active">Inicio</a>

document.querySelector("menuInicio").innerHTML=menuPrincipal;
