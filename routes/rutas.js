import {Router} from "express" 
const router = Router()

var artistas = ["Bethoven", "Van Gog", "Mozart", "Picasso"]

router.get("/",(req,res) => {
	res.render("home", {artistas})
})
router.get("/info/:c",(req,res) => { //Los dos puntos son para mandar a llamar una variable en la ruta 
	var c = req.params.c //req es la variable para recibir datos de otro lugar, res es para mandarlos
	console.log(c)
	res.render("info",{c})
})

router.get("/contacto",(req, res) => {
	res.render("contacto")
})

router.post("/contacto",(req, res) => {
	var nombre = req.body.nombre
	var edad = req.body.edad
	console.log("Nombre: "+nombre+" Edad: "+edad)
	res.render("respuesta",{nombre, edad}) //todas la rutas deberían terminar con el res
})

export default router