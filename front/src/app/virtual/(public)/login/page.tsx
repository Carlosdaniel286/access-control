import { Button } from "@/components/ui/button";

export default function Login() {

  async function requestUsername(formData: FormData) {
    'use server';
    const username = formData.get('username');
    console.log(username);
  }

  return (
    <main
      className="
        bg-white /* fundo branco padrão mobile */
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
          lg:backdrop-blur-[3px]
          p-4
        "
      >
        <form
          action={requestUsername}
          className="
            bg-white
            w-full
            max-w-[400px]
            flex
            flex-col
            gap-10
            md:px-10
            py-16
            rounded-md
          "
        >
          <input
            required={true}
            type="email"
            className="input"
            name="email"
            placeholder="Digite seu email "
          />

          <input
            required={true}
            type="password"
            className="input"
            name="password"
            placeholder="Digite sua senha "
          />

          <Button
            type="submit"
            className="
              cursor-pointer 
              p-6 
              text-2xl 
              bg-blue-500 
              hover:bg-blue-400
            "
          >
            Entrar
          </Button>
        </form>
      </div>
    </main>
  );
}
