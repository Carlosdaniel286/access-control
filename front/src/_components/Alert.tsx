
import React from "react";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

type PropsAlert = {
  children?: React.ReactNode;           // botão que dispara o alerta
  title?: React.ReactNode;              // título do diálogo
  description?: React.ReactNode;        // texto descritivo
  cancelText?: React.ReactNode | 'none';         // texto botão cancelar
  actionText?: React.ReactNode | 'none';         // texto botão confirmar/ação
};

export default function Alert({
  children,
  title = "Tem certeza absoluta?",
  description = (
    <>
      Esta ação não pode ser desfeita. Isso excluirá permanentemente sua conta e removerá seus dados dos nossos servidores.
    </>
  ),
  cancelText = "Cancelar",
  actionText = "Continuar",
}: PropsAlert) {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>{children}</AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>{title}</AlertDialogTitle>
          <AlertDialogDescription>{description}</AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
        {cancelText !== 'none' && (
            <AlertDialogCancel className="cursor-pointer">{cancelText}</AlertDialogCancel>
          )}
          {actionText !== 'none' && (
            <AlertDialogAction className="cursor-pointer">{actionText}</AlertDialogAction>
          )}
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
