import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'miembros',
        loadChildren: './miembros/miembros.module#NewoApp9MicroMiembrosModule'
      },
      {
        path: 'entrada-miembros',
        loadChildren: './entrada-miembros/entrada-miembros.module#NewoApp9MicroEntradaMiembrosModule'
      },
      {
        path: 'invitados',
        loadChildren: './invitados/invitados.module#NewoApp9MicroInvitadosModule'
      },
      {
        path: 'entrada-invitados',
        loadChildren: './entrada-invitados/entrada-invitados.module#NewoApp9MicroEntradaInvitadosModule'
      },
      {
        path: 'sedes',
        loadChildren: './sedes/sedes.module#NewoApp9MicroSedesModule'
      },
      {
        path: 'espacio-libre',
        loadChildren: './espacio-libre/espacio-libre.module#NewoApp9MicroEspacioLibreModule'
      },
      {
        path: 'tipo-espacio',
        loadChildren: './tipo-espacio/tipo-espacio.module#NewoApp9MicroTipoEspacioModule'
      },
      {
        path: 'host-sede',
        loadChildren: './host-sede/host-sede.module#NewoApp9MicroHostSedeModule'
      },
      {
        path: 'reservas',
        loadChildren: './reservas/reservas.module#NewoApp9MicroReservasModule'
      },
      {
        path: 'espacios-reserva',
        loadChildren: './espacios-reserva/espacios-reserva.module#NewoApp9MicroEspaciosReservaModule'
      },
      {
        path: 'registro-compra',
        loadChildren: './registro-compra/registro-compra.module#NewoApp9MicroRegistroCompraModule'
      },
      {
        path: 'facturacion',
        loadChildren: './facturacion/facturacion.module#NewoApp9MicroFacturacionModule'
      },
      {
        path: 'equipo-empresas',
        loadChildren: './equipo-empresas/equipo-empresas.module#NewoApp9MicroEquipoEmpresasModule'
      },
      {
        path: 'miembros-equipo-empresas',
        loadChildren: './miembros-equipo-empresas/miembros-equipo-empresas.module#NewoApp9MicroMiembrosEquipoEmpresasModule'
      },
      {
        path: 'cuenta-asociada',
        loadChildren: './cuenta-asociada/cuenta-asociada.module#NewoApp9MicroCuentaAsociadaModule'
      },
      {
        path: 'beneficio',
        loadChildren: './beneficio/beneficio.module#NewoApp9MicroBeneficioModule'
      },
      {
        path: 'perfil-equipo-empresa',
        loadChildren: './perfil-equipo-empresa/perfil-equipo-empresa.module#NewoApp9MicroPerfilEquipoEmpresaModule'
      },
      {
        path: 'empresa',
        loadChildren: './empresa/empresa.module#NewoApp9MicroEmpresaModule'
      },
      {
        path: 'landing',
        loadChildren: './landing/landing.module#NewoApp9MicroLandingModule'
      },
      {
        path: 'productos-servicios',
        loadChildren: './productos-servicios/productos-servicios.module#NewoApp9MicroProductosServiciosModule'
      },
      {
        path: 'pais',
        loadChildren: './pais/pais.module#NewoApp9MicroPaisModule'
      },
      {
        path: 'ciudad',
        loadChildren: './ciudad/ciudad.module#NewoApp9MicroCiudadModule'
      },
      {
        path: 'blog',
        loadChildren: './blog/blog.module#NewoApp9MicroBlogModule'
      },
      {
        path: 'comentario-blog',
        loadChildren: './comentario-blog/comentario-blog.module#NewoApp9MicroComentarioBlogModule'
      },
      {
        path: 'feed',
        loadChildren: './feed/feed.module#NewoApp9MicroFeedModule'
      },
      {
        path: 'comentario-feed',
        loadChildren: './comentario-feed/comentario-feed.module#NewoApp9MicroComentarioFeedModule'
      },
      {
        path: 'chat',
        loadChildren: './chat/chat.module#NewoApp9MicroChatModule'
      },
      {
        path: 'chat-grupo',
        loadChildren: './chat-grupo/chat-grupo.module#NewoApp9MicroChatGrupoModule'
      },
      {
        path: 'evento',
        loadChildren: './evento/evento.module#NewoApp9MicroEventoModule'
      },
      {
        path: 'categoria-contenidos',
        loadChildren: './categoria-contenidos/categoria-contenidos.module#NewoApp9MicroCategoriaContenidosModule'
      },
      {
        path: 'grupos',
        loadChildren: './grupos/grupos.module#NewoApp9MicroGruposModule'
      },
      {
        path: 'miembros-grupo',
        loadChildren: './miembros-grupo/miembros-grupo.module#NewoApp9MicroMiembrosGrupoModule'
      },
      {
        path: 'recursos-fisicos',
        loadChildren: './recursos-fisicos/recursos-fisicos.module#NewoApp9MicroRecursosFisicosModule'
      },
      {
        path: 'uso-recurso-fisico',
        loadChildren: './uso-recurso-fisico/uso-recurso-fisico.module#NewoApp9MicroUsoRecursoFisicoModule'
      },
      {
        path: 'tipo-recurso',
        loadChildren: './tipo-recurso/tipo-recurso.module#NewoApp9MicroTipoRecursoModule'
      },
      {
        path: 'consumo-market',
        loadChildren: './consumo-market/consumo-market.module#NewoApp9MicroConsumoMarketModule'
      },
      {
        path: 'prepago-consumo',
        loadChildren: './prepago-consumo/prepago-consumo.module#NewoApp9MicroPrepagoConsumoModule'
      },
      {
        path: 'margen-newo-eventos',
        loadChildren: './margen-newo-eventos/margen-newo-eventos.module#NewoApp9MicroMargenNewoEventosModule'
      },
      {
        path: 'margen-newo-grupos',
        loadChildren: './margen-newo-grupos/margen-newo-grupos.module#NewoApp9MicroMargenNewoGruposModule'
      },
      {
        path: 'margen-newo-blog',
        loadChildren: './margen-newo-blog/margen-newo-blog.module#NewoApp9MicroMargenNewoBlogModule'
      },
      {
        path: 'margen-newo-productos',
        loadChildren: './margen-newo-productos/margen-newo-productos.module#NewoApp9MicroMargenNewoProductosModule'
      },
      {
        path: 'tipo-prepago-consumo',
        loadChildren: './tipo-prepago-consumo/tipo-prepago-consumo.module#NewoApp9MicroTipoPrepagoConsumoModule'
      }
      /* jhipster-needle-add-entity-route - JHipster will add entity modules routes here */
    ])
  ],
  declarations: [],
  entryComponents: [],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class NewoApp9MicroEntityModule {}
