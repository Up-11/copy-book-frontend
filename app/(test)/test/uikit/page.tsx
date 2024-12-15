import { Button } from "@/shared/ui/other/button";
import { Calendar } from "@/shared/ui/input/calendar";
import { Checkbox } from "@/shared/ui/input/checkbox";
import { Drawer } from "@/shared/ui/modals/drawer";
import { Input } from "@/shared/ui/input/input";
import { Label } from "@/shared/ui/input/label";
import { Modal } from "@/shared/ui/modals/modal";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/shared/ui/modals/popover";
import { Progress } from "@/shared/ui/input/progress";
import { ScrollArea } from "@/shared/ui/other/scroll-area";
import { SelectItem } from "@/shared/ui/input/select";
import { Separator } from "@/shared/ui/view/separator";
import { Skeleton } from "@/shared/ui/other/skeleton";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/shared/ui/view/tabs";
import { Textarea } from "@/shared/ui/input/textarea";
import { UiAlert } from "@/shared/ui/custom/ui-alert";
import { UiPagination } from "@/shared/ui/custom/ui-pagination";
import { SelectValue } from "@radix-ui/react-select";
import { HouseIcon } from "lucide-react";
import { UiInputOtp } from "@/shared/ui/custom/ui-input-otp";
import { UiSelect } from "@/shared/ui/custom/ui-select";
import { UiTooltip } from "@/shared/ui/custom/ui-tooltip";
import { Title } from "@/shared/ui/view/title";
import { UiNavigationMenu } from "@/shared/ui/custom/ui-navigation-menu";
import { Loader } from "@/shared/ui/view/loader";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "UiKit",
};

export default function UiKit() {
  // const { toast } = useToast()
  return (
    <div className="m-5">
      <h1 className="text-3xl font-extrabold">UiKit</h1>
      <div className="flex gap-1">
        <div className="m-5 flex flex-col">
          <div className="border border-black p-10">
            <h1>Buttons</h1>
            <div className="mt-5 flex flex-col gap-2">
              <h1>VARS</h1>
              <Button variant={"default"}>Button</Button>
              <Button variant={"destructive"}>Button</Button>
              <Button variant={"ghost"}>Button</Button>
              <Button variant={"link"}>Button</Button>
              <Button variant={"outline"}>Button</Button>
              <Button variant={"secondary"}>Button</Button>
              <h1 className="font-extrabold">SIZES</h1>

              <Button size={"default"}>Button</Button>
              <Button size={"lg"}>Button</Button>
              <Button size={"icon"}>
                <HouseIcon />
              </Button>
              <Button size={"sm"}>Button</Button>
              <Separator />
              <Button size={"default"} loading>
                Button
              </Button>
            </div>
          </div>
        </div>
        <div className="m-5 flex w-96 flex-col">
          <div className="border border-black p-10">
            <h1>Progress</h1>
            <div className="mt-5 flex flex-col gap-2">
              <Progress className="h-5" value={22} max={100} />
            </div>
          </div>
          <div className="mt-5 border border-black p-10">
            <h1>Skeleton</h1>
            <div className="mt-5 flex flex-col gap-2">
              <Skeleton className="h-10" />
              <div className="mt-1 flex items-center justify-between gap-2">
                <Skeleton className="h-5 w-full" />
                <Skeleton className="h-5 w-full" />
              </div>
            </div>
          </div>
          <div className="mt-5 border border-black p-10">
            <h1>ToolTip</h1>
            <div className="mt-5 flex flex-col gap-2">
              <UiTooltip content="tooltip">
                <Button variant={"link"}>ToolTip</Button>
              </UiTooltip>
            </div>
          </div>
          <div className="mt-5 border border-black p-10">
            <Title>Tabs</Title>
            <div className="mt-5 flex flex-col gap-2">
              <Tabs defaultValue="account" className="w-[400px]">
                <TabsList>
                  <TabsTrigger value="account">Account</TabsTrigger>
                  <TabsTrigger value="password">Password</TabsTrigger>
                </TabsList>
                <TabsContent value="account">
                  Make changes to your account here.
                </TabsContent>
                <TabsContent value="password">
                  Change your password here.
                </TabsContent>
              </Tabs>
            </div>
          </div>
          <div className="mt-5 border border-black p-10">
            <Title>Navigation Menu</Title>
            <div className="mt-5 flex flex-col gap-2">
              {/* <UiNavigationMenu /> */}
            </div>
          </div>
        </div>
        <div className="flex w-96 flex-col">
          <div className="mt-5 border border-black p-10">
            <h1>Separator</h1>
            <div className="mt-5 flex gap-2">
              <div>123</div>{" "}
              <Separator className="bg-primary" orientation="vertical" />
              <div>123</div>
              <Separator className="bg-primary" orientation="vertical" />
              <div>123</div>
            </div>
          </div>
          <div className="mt-5 border border-black p-10">
            <h1 className="font-extrabold">Input Group</h1>
            <div className="mt-5 flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <Checkbox id="test" />
                <Label htmlFor="test">Label</Label>
              </div>
              <div>
                <Label htmlFor="test2">Label</Label>
                <Input type="text " id="test2" />
              </div>
              <div>
                <Label htmlFor="test3">Label</Label>
                <Textarea rows={3} id="test3" className="resize-none" />
              </div>
              <div>
                <Label htmlFor="test4">Label</Label>
                <UiInputOtp />
              </div>
            </div>
          </div>
          <div className="mt-5 border border-black p-10">
            <Title>Calendar</Title>
            <div className="mt-5 flex gap-2">
              <Calendar />
            </div>
          </div>
          <div className="mt-5 border border-black p-10">
            <Title>Sheet</Title>
            <div className="mt-5 flex gap-2">
              <Drawer
                title={"Drawer"}
                content={
                  <>
                    <p>123123123</p>
                  </>
                }
              >
                <div className="button">Open Drawer</div>
              </Drawer>
            </div>
          </div>
          <div className="mt-5 gap-3 border border-black p-10">
            <Title>PopOver</Title>
            <Popover>
              <PopoverTrigger>Trigger</PopoverTrigger>
              <PopoverContent sideOffset={3}>
                {" "}
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Maiores, placeat. Blanditiis aperiam similique distinctio
                debitis, natus laudantium, ut facere beatae sequi quibusdam
                dolorum illo possimus delectus quasi quam ex illum? Mollitia
                alias, similique saepe vel minima ratione dolor natus qui, in
                sunt voluptas nulla obcaecati earum consequatur neque tenetur
                accusantium voluptatibus dolorum! Recusandae, et itaque!
              </PopoverContent>
            </Popover>
          </div>
          <div className="mt-5 gap-3 border border-black p-10">
            <Title>Modal</Title>
            <Modal
              title="Modal Title "
              content={
                <>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Laborum consequuntur iusto fuga voluptatibus minima excepturi
                  aliquam nisi, tempore error! Laborum atque qui quae
                  consequuntur at inventore eum consectetur et quod voluptatum,
                  tenetur molestias adipisci vero quo animi optio odit sunt
                  tempore numquam. Optio nobis quam architecto officiis vel at?
                  Sunt, perspiciatis itaque esse magni fuga repudiandae eaque
                  qui sit veniam, vel ullam sunt facilis rem incidunt et
                  asperiores itaque nulla voluptates fugiat, impedit, nisi
                  dolore accusamus illum beatae maxime hic vero nihil facere
                  veniam temporibus dicta totam, quis eveniet velit. Possimus
                  nobis beatae inventore eveniet soluta libero nihil earum
                  cupiditate. Magnam debitis enim esse delectus nihil itaque
                  voluptatem sapiente minus cupiditate nulla non explicabo,
                  architecto eligendi est commodi iusto sed at similique et
                  fugit nam, sunt consequuntur. Perferendis.
                </>
              }
            >
              <div className="button"> 123</div>
            </Modal>
          </div>
        </div>
        <div className="flex w-96 flex-col">
          <div className="mt-5 border border-black p-10">
            <Title color="indigo" size="extraLarge">
              Title/Loader
            </Title>
            <Loader />
          </div>
          <div className="mt-5 border border-black p-10">
            <Title>Select</Title>
            <UiSelect
              label="select"
              content={
                <>
                  <SelectItem value="apple">Apple</SelectItem>
                  <SelectItem value="banana">Banana</SelectItem>
                  <SelectItem value="blueberry">Blueberry</SelectItem>
                  <SelectItem value="grapes">Grapes</SelectItem>
                  <SelectItem value="pineapple">Pineapple</SelectItem>{" "}
                </>
              }
            >
              <SelectValue placeholder="Select" />
            </UiSelect>
          </div>
          <div className="mt-5 gap-3 border border-black p-10">
            <Title>Scroll Area</Title>

            <ScrollArea className="mt-4 h-40 w-full border">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Deleniti qui explicabo laboriosam nesciunt, aperiam at et
                dolorem perferendis earum eaque asperiores ducimus culpa ea,
                nulla nisi illo saepe! Assumenda, enim quaerat accusantium quas
                est natus aspernatur ipsum provident, quo repudiandae, quasi ex
                obcaecati temporibus soluta perspiciatis esse repellendus
                laborum suscipit illo. Harum dolore tempore nisi facilis, alias
                dicta magni a architecto esse quia adipisci quis deleniti
                distinctio corrupti in? Accusantium iure facere laudantium
                perferendis, quis dolorem porro impedit cupiditate natus?
                Possimus maiores assumenda nobis facere nisi non autem, eligendi
                consectetur labore. Laudantium id odio eos porro sequi ipsam
                consectetur.
              </p>
            </ScrollArea>
          </div>
          <div className="mt-5 gap-3 border border-black p-10">
            <Title>Toasts</Title>
            <Button>Check Toast</Button>
          </div>
          <div className="mt-5 gap-3 border border-black p-10">
            <Title>Alert</Title>
            <UiAlert title="Alert" description="Description" />
          </div>
          <div className="mt-5 gap-3 border border-black p-10">
            <Title>Pagination</Title>
            <UiPagination />
          </div>
        </div>
      </div>
    </div>
  );
}
