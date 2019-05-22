import React, { Component } from 'react';

class Formulario extends Component {

    tituloRef = React.createRef();
    contenidoRef = React.createRef();

    const
    crearPost = (e) => {
        e.preventDefault();

        const post = {
            title: this.tituloRef.current.value,
            body: this.contenidoRef.current.value,
            userId: 1
        }

        this.props.crearPost(post);
        e.target.reset();
    }

    render() {
        return (
            <form className="col-8" onSubmit={this.crearPost}>
                <legend className="text-center">Crear nuevo post</legend>

                <div className="form-group">
                    <label> Titulo del post </label>
                    <input className="form-control" ref={this.tituloRef} type="text" placeholder="Ingrese el titulo" />
                </div>

                <div className="form-group">
                    <label> Contenido </label>
                    <textarea className="form-control" ref={this.contenidoRef} placeholder="Ingrese el contenido"></textarea>
                </div>

                <button type="submit" className="btn btn-primary">Guardar</button>
            </form>
        );
    }
}

export default Formulario;