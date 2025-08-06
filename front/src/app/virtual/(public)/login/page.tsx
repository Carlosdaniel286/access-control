
import Alert from "@/_components/Alert";
import { InputMask } from "@/_components/InputMask";
import { Button } from "@/components/ui/button";

function ButtonOpen() {
  return (
    <Button
      className="
        cursor-pointer
        capitalize
        py-6
        w-full
        text-2xl
        bg-gray-500
        hover:bg-slate-700
      "
    >
      cadastrar
    </Button>
  );
}

export default function Login() {
  async function requestUsername(formData: FormData) {
    'use server';
    const username = formData.get('username');
    console.log(username);
  }

  return (
    <main
      className="
        bg-white
        md:bg-[url(/imageForm/login.png)]
        md:bg-cover
        md:bg-center
        md:bg-black/50
        md:bg-blend-multiply
      "
    >
      <div
        className="
          flex
          w-full
          h-screen
          flex-col
          items-center
          justify-center
          lg:bg-white/8
          backdrop-blur-[3px]
          p-4
        "
      >
        <div
          className="
            w-full
            flex
            flex-col
            bg-white
            max-w-[400px]
            pb-5
            h-full
            max-h-[500px]
            md:max-h-[450px]
            rounded-md
          "
        >
          <header className="h-16 text-center text-3xl font-semibold capitalize">
            <h2 className="py-3">login</h2>
          </header>

          <form
            action={requestUsername}
            className="
              w-full
              h-full
              max-h-full
              flex
              flex-col
              justify-around
              md:px-10
            "
          >
            <InputMask
              type="email"
              className="h-[60px]"
              name="email"
              placeholder="Digite seu email"
            />

            <InputMask
              type="password"
              className="h-[60px]"
              name="password"
              placeholder="Digite sua senha"
            />

            <Button
              type="submit"
              className="
                cursor-pointer
                p-7
                text-2xl
                bg-black
                hover:bg-slate-700
                capitalize
              "
            >
              Entrar
            </Button>
          </form>
          <div className="h-[80px] py-1.5 text-center">
            <span className="p-3 font-medium uppercase text-center">ou</span>
          </div>

          <footer className="flex justify-center md:px-10">
            <Alert
              title="Deseja cadastrar?"
              description="Apenas o portal administrativo pode cadastrar novos usuários. Digite somente o e-mail; a senha será gerada automaticamente para um cadastro provisório."
              cancelText='none'
            >
              <ButtonOpen />
            </Alert>
          </footer>
        </div>
      </div>
    </main>
  );
}