import { Form } from "@/components/Form/Form";

export default function HomePage() {
  return (
    <main>

      <div style={{height: '200vh'}}>
          <Form>
            <input name="title" className="form__input"/>
            <input name="deadline" className="form__input"/>
            <input name="tags" className="form__input"/>
            <textarea name="description" rows="10" className="form__input"/>
          </Form>
      </div>
    </main>
  )
}
