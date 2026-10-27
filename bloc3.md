# Bloc 3: Viatge Temporal, Exorcisme del Codi i Publicació Remota

No tinc captures d'aquest bloc. He deixat marcats els passos que falten perquè no puc presentar-los com si ja els hagués fet.

## Acció 3.11

**Explicació:** En aquest pas he de guardar un canvi infectat amb el missatge `feat: unhandled spectral exception`. No tinc cap captura ni he trobat aquest commit a l'historial o al registre local de moviments de Git que he pogut revisar. He deixat pendent el codi afegit i l'identificador del commit.

**Comandes utilitzades:**

```bash
# Pendent: afegir les comandes exactes quan hi hagi evidències.
```

Canvi infectat i identificador del commit: **[pendent de completar]**.

**Captura:** **[pendent d'aportar la captura del canvi i del commit infectat]**.

## Acció 3.12

**Explicació:** Amb `git diff` puc comparar versions del fitxer i veure què ha canviat. En aquesta acció he de comparar el commit infectat amb l'anterior, però em falta l'evidència de la comparació. He deixat pendent la comanda exacta i els canvis que s'hi veuen.

**Comandes utilitzades:**

```bash
# Pendent: afegir la comanda git diff exacta que mostri la captura.
```

Canvis observats: **[pendent de completar]**.

**Captura:** **[pendent d'aportar la captura de la comparació]**.

## Acció 3.13

**Explicació:** En aquest pas he de tornar al commit segur amb `git reset --hard HEAD~1`, tal com demana l'enunciat. Aquesta comanda fa retrocedir la branca un commit i també descarta els canvis locals dels fitxers que Git ja controla. No tinc cap captura ni cap entrada al registre local de moviments de Git que acrediti aquest pas, així que no el dono per fet.

**Comandes utilitzades:**

```bash
# Pendent: acreditar l'execució de la comanda indicada a l'enunciat.
```

Commit abans i després del retorn: **[pendent de completar]**.

**Captura:** **[pendent d'aportar la captura del retorn al commit segur]**.

## Acció 3.14

**Explicació:** Amb el gràfic puc veure que les dues branques surten de `d9e029d` i que es tornen a ajuntar a `04c0cb8`. He inclòs l'historial que es pot comprovar al repositori disponible, però em falta la captura d'aquesta consulta. Aquest gràfic acredita les branques i la fusió, però no demostra que hagi fet el retorn de l'acció anterior.

**Comandes utilitzades:**

Consulta de lectura comprovada durant la revisió del repositori; no apareix a les captures aportades:

```bash
git log --all --graph --oneline --decorate
```

Historial comprovat al repositori, sense convertir-lo en una captura inventada:

```text
*   04c0cb8 (HEAD -> main) Conflicte resolt
|\
| * 4cda484 (feature-sanctuary) Feat: Mode protecció: sanctuary
* | 8bc21e9 (feature-nightmare) Feat: Introduim el security mode
|/
* d9e029d feat: Bloqueja les portes del server
* 1152463 Feat: enable security cameras
```

**Captura:** **[pendent d'aportar la captura del gràfic de l'historial]**.

## Acció 3.15

**Explicació:** En aquest pas he de crear el repositori públic `halloween-git-rescue` a GitHub i connectar-lo amb el repositori local. També he de pujar les branques i la documentació amb les captures. Al repositori local revisat no hi ha cap connexió remota configurada, i no tinc captures de GitHub ni de la pujada, així que aquesta part queda pendent.

**Comandes utilitzades:**

