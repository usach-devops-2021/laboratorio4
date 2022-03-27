# Versión Disponible solo para Windows y Servidor Jenkins con Debian.
### Requiere tener Google Chrome instalado en el Sistema Operativo.

# Backend

### Run Jar
* Local: mvn spring-boot:run

### Compile Code
* mvn clean compile -e

### Test Code
* mvn clean test -e

### Jar Code
* mvn clean package -e

### Testing Application
* Test Live: http://localhost:8081/rest/msdxc/ping
* Test DXC: http://localhost:8081/rest/msdxc/dxc?sueldo=2000000&ahorro=40000000
* Test Impuesto: http://localhost:8081/rest/msdxc/impuesto?sueldo=2000000&ahorro=40000000
* Test Saldo: http://localhost:8081/rest/msdxc/saldo?sueldo=2000000&ahorro=40000000


# Frontend

### Install Dependency
* npm install

### Run app
* node app.js

### Testing Application
* Open on Browser: http://localhost:3000

# Reportes

### Tablas Jmetter
* Se encuentran en el proyecto en "reportes".

# Instalaciones adicionales

### Gooogle Chrome en Jenkins
* Ingresar como usuario root
* cd /var/jenkins_home
* wget https://dl.google.com/linux/direct/google-chrome-stable_current_amd64.deb
* dpkg -i google-chrome-stable_current_amd64.deb
