import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ThesisDirComponent } from "./components/ThesisDir/thesis-dir/thesis-dir.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ThesisDirComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'ReportesActividadesFrontend';
}
