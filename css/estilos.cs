*{ 
    margin: 0; 
    padding: 0; 
    box-sizing: 
    border-box; 
}
body{ 
    font-family: 'Segoe UI', Arial, sans-serif; color: #333; 
    background: #f7f3ee; 
    line-height: 1.6;
}

header { 
    background: #1f3a4d; 
    color: white; padding: 
    1rem 2rem; 
    display: flex; 
    justify-content: space-between; 
    align-items: center; 
    flex-wrap: wrap; 
}
nav ul { 
    list-style: none;
    display: flex;
    gap: 1.5rem; 
}
nav a { 
    color: white; 
    text-decoration: none;
    font-weight: 600; 
}
nav a:hover { 
    color: #e0b44c; 
    }

section { 
    padding: 3rem 2rem; 
    max-width: 1000px; 
    margin: auto; 
    }

h2 { 
    color: #1f3a4d; 
    margin-bottom: 1rem; 
}
.portada { 
    background: #1f3a4d; 
    color: white; text-align: center; 
    max-width: 100%; 
    padding: 6rem 2rem; 
}
.portada h2 { 
    color: white; 
    font-size: 2.5rem; 
}

.boton, button { 
    background: #e0b44c; 
    color: #1f3a4d; 
    border: none; 
    padding: 0.7rem 1.5rem; 
    border-radius: 6px; 
    font-weight: bold; 
    cursor: pointer; 
    text-decoration: none; 
    display: inline-block; 
    margin-top: 1rem; 
}
.boton:hover, button:hover { 
    background: #c99a2e; 
    }

.tarjeta { 
    background: white; 
    padding: 1.5rem; 
    border-radius: 10px; 
    margin-bottom: 1rem; 
    box-shadow: 0 2px 8px rgba(0,0,0,.1); 
}

form { 
    display: flex; 
    flex-direction: column; 
    gap: 1rem; 
    max-width: 450px; 
}
input { 
    padding: 0.7rem; 
    border: 1px solid #ccc; 
    border-radius: 6px; 
}

.oculto { 
    display: none; 
}
#mensaje { 
    font-weight: bold; 
}
footer { 
    background: #1f3a4d; 
    color: white; 
    text-align: center; 
    padding: 1rem; 
}