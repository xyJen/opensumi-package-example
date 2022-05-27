// injectable-hooks/useInjectable;
import { useInjectable, CommandService } from "@opensumi/ide-core-browser";
import { Autowired } from "@opensumi/di";

export const example = () => {
  const commandService = useInjectable<CommandService>(CommandService);
  commandService.executeCommand("a.command");
};

export class ExampleTwo {
  @Autowired(CommandService)
  private commandService: CommandService;

  onStart() {
    this.commandService.executeCommand("a.command");
  }
}
