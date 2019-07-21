package io.github.jhipster.application.service.dto;

import java.io.Serializable;
import java.util.Objects;
import io.github.jhipster.service.Criteria;
import io.github.jhipster.service.filter.BooleanFilter;
import io.github.jhipster.service.filter.DoubleFilter;
import io.github.jhipster.service.filter.Filter;
import io.github.jhipster.service.filter.FloatFilter;
import io.github.jhipster.service.filter.IntegerFilter;
import io.github.jhipster.service.filter.LongFilter;
import io.github.jhipster.service.filter.StringFilter;
import io.github.jhipster.service.filter.ZonedDateTimeFilter;

/**
 * Criteria class for the {@link io.github.jhipster.application.domain.Chat} entity. This class is used
 * in {@link io.github.jhipster.application.web.rest.ChatResource} to receive all the possible filtering options from
 * the Http GET request parameters.
 * For example the following could be a valid request:
 * {@code /chats?id.greaterThan=5&attr1.contains=something&attr2.specified=false}
 * As Spring is unable to properly convert the types, unless specific {@link Filter} class are used, we need to use
 * fix type specific filters.
 */
public class ChatCriteria implements Serializable, Criteria {

    private static final long serialVersionUID = 1L;

    private LongFilter id;

    private StringFilter mensaje;

    private ZonedDateTimeFilter fecha;

    private BooleanFilter leido;

    private LongFilter deId;

    private LongFilter paraId;

    public ChatCriteria(){
    }

    public ChatCriteria(ChatCriteria other){
        this.id = other.id == null ? null : other.id.copy();
        this.mensaje = other.mensaje == null ? null : other.mensaje.copy();
        this.fecha = other.fecha == null ? null : other.fecha.copy();
        this.leido = other.leido == null ? null : other.leido.copy();
        this.deId = other.deId == null ? null : other.deId.copy();
        this.paraId = other.paraId == null ? null : other.paraId.copy();
    }

    @Override
    public ChatCriteria copy() {
        return new ChatCriteria(this);
    }

    public LongFilter getId() {
        return id;
    }

    public void setId(LongFilter id) {
        this.id = id;
    }

    public StringFilter getMensaje() {
        return mensaje;
    }

    public void setMensaje(StringFilter mensaje) {
        this.mensaje = mensaje;
    }

    public ZonedDateTimeFilter getFecha() {
        return fecha;
    }

    public void setFecha(ZonedDateTimeFilter fecha) {
        this.fecha = fecha;
    }

    public BooleanFilter getLeido() {
        return leido;
    }

    public void setLeido(BooleanFilter leido) {
        this.leido = leido;
    }

    public LongFilter getDeId() {
        return deId;
    }

    public void setDeId(LongFilter deId) {
        this.deId = deId;
    }

    public LongFilter getParaId() {
        return paraId;
    }

    public void setParaId(LongFilter paraId) {
        this.paraId = paraId;
    }


    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (o == null || getClass() != o.getClass()) {
            return false;
        }
        final ChatCriteria that = (ChatCriteria) o;
        return
            Objects.equals(id, that.id) &&
            Objects.equals(mensaje, that.mensaje) &&
            Objects.equals(fecha, that.fecha) &&
            Objects.equals(leido, that.leido) &&
            Objects.equals(deId, that.deId) &&
            Objects.equals(paraId, that.paraId);
    }

    @Override
    public int hashCode() {
        return Objects.hash(
        id,
        mensaje,
        fecha,
        leido,
        deId,
        paraId
        );
    }

    @Override
    public String toString() {
        return "ChatCriteria{" +
                (id != null ? "id=" + id + ", " : "") +
                (mensaje != null ? "mensaje=" + mensaje + ", " : "") +
                (fecha != null ? "fecha=" + fecha + ", " : "") +
                (leido != null ? "leido=" + leido + ", " : "") +
                (deId != null ? "deId=" + deId + ", " : "") +
                (paraId != null ? "paraId=" + paraId + ", " : "") +
            "}";
    }

}
