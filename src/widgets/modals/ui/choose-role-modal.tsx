import { routes } from "@/shared/config/routes";
import { Modal } from "@/shared/ui/modals/modal";
import Title from "@/shared/ui/view/title";
import { ArrowUpRightIcon } from "lucide-react";
import Link from "next/link";
import React, { PropsWithChildren } from "react";
import "./modals.styles.css";
export const ChooseRoleModal: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <Modal
      content={
        <>
          <Title className="mb-4 font-semibold">
            Кто будет пользоваться учебником?
          </Title>
          <div className="flex justify-center gap-4 max-sm:flex-col">
            <Link
              href={routes.studentAuth}
              className="kid-image flex justify-between rounded-3xl bg-yellow-100 p-layout sm:h-[200px] sm:w-[50%]"
            >
              <Title>Я ученик</Title>
              <ArrowUpRightIcon size={30} />
            </Link>
            <Link
              href={routes.home}
              className="flex justify-between rounded-3xl bg-gray-100 p-layout sm:h-[200px] sm:w-[50%]"
            >
              <Title>Я учитель</Title>
              <ArrowUpRightIcon size={30} />
            </Link>
          </div>
        </>
      }
    >
      {children}
    </Modal>
  );
};
