import { Button } from "@/components/ui/button";
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { InputGroup, InputGroupAddon, InputGroupInput, InputGroupText } from "@/components/ui/input-group";
import { Textarea } from "@/components/ui/textarea";

export default function ContactPage() {
  return (
    <div className="container mx-auto py-8 sm:py-12 md:py-16 space-y-6 sm:space-y-8 px-4 sm:px-6 lg:px-8">
      <div className="text-center max-w-xl mx-auto space-y-2">
        <h2 className="text-2xl sm:text-3xl md:text-4xl">Contáctanos</h2>
        <p className="text-sm sm:text-base">
          Se parte de los emprendedores que dieron el gran salto.
        </p>
      </div>
      <FieldGroup className="max-w-xl mx-auto">
        <Field>
          <FieldLabel>Nombre</FieldLabel>
          <Input type="text" placeholder="Marco Guillen" required />
        </Field>
        <Field>
          <FieldLabel>Nombre de negocio</FieldLabel>
          <Input type="text" placeholder="Acme Store" required />
        </Field>
        <Field>
          <FieldLabel>Correo Electrónico</FieldLabel>
          <Input type="email" placeholder="marco@email.com" required/>
        </Field>
        <Field>
          <FieldLabel>Teléfono</FieldLabel>
          <InputGroup>
            <InputGroupInput placeholder="000 000 000" className="!pl-1" required />
            <InputGroupAddon>
              <InputGroupText>+51</InputGroupText>
            </InputGroupAddon>
          </InputGroup>
        </Field>
        <Field>
          <FieldLabel>Mensaje</FieldLabel>
          <Textarea rows={5} placeholder="Escribe tu mensaje aquí..." />
        </Field>
        <Field>
          <Button size="lg">Enviar</Button>
        </Field>
      </FieldGroup>
    </div>
  );
}