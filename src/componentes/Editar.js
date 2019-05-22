import React, { Component } from 'react';

class Editar extends Component {

    tituloRef = React.createRef();
    contenidoRef = React.createRef();

    const
    editarPost = (e) => {
        e.preventDefault();

        const post = {
            title: this.tituloRef.current.value,
            body: this.contenidoRef.current.value,
            userId: 1,
            id: this.props.post.id
        }

        this.props.editarPost(post);
        
        e.target.reset();
    }

    cargarFormulario = () => {
        if(!this.props.post) return null;

        const { title, body } = this.props.post;

        return (
            <form className="col-8" onSubmit={this.editarPost}>
                <legend className="text-center">Editar post</legend>

                <div className="form-group">
                    <label> Titulo del post </label>
                    <input className="form-control" defaultValue={title} ref={this.tituloRef} type="text" />
                </div>

                <div className="form-group">
                    <label> Contenido </label>
                    <textarea className="form-control" defaultValue={body} ref={this.contenidoRef}></textarea>
                </div>

                <button type="submit" className="btn btn-primary">Guardar</button>
            </form>
        )
    }

    render() {
        return (
            <React.Fragment>
                {this.cargarFormulario()}
            </React.Fragment>
            
        );
    }
}

export default Editar;